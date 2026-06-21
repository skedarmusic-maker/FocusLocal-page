import ftp from "basic-ftp"
import path from "path"
import dotenv from "dotenv"

dotenv.config()

async function deploy() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        const host = process.env.FTP_HOST
        const user = process.env.FTP_USER
        const password = process.env.FTP_PASS
        const remoteFolder = process.env.FTP_REMOTE_DIR || "public_html/local"

        if (!host || !user || !password) {
            console.error("Erro: Variáveis FTP_HOST, FTP_USER ou FTP_PASS não definidas no arquivo .env!")
            process.exit(1)
        }

        console.log(`Conectando ao servidor FTP: ${host}...`)
        await client.access({
            host: host,
            user: user,
            password: password,
            secure: true, // Tenta usar FTPS seguro
            secureOptions: {
                rejectUnauthorized: false, // Ignora erro de certificado autoassinado ou expirado
                checkServerIdentity: () => undefined // Ignora erro de nome de host incompatível (ex: IP em vez de *.hstgr.io)
            }
        })
        
        console.log("Conectado ao servidor FTP da Hostinger com sucesso!")
        
        console.log(`Acessando a pasta remota: ${remoteFolder}`)
        await client.ensureDir(remoteFolder)
        
        console.log("Limpando arquivos antigos do diretório remoto...")
        await client.clearWorkingDir()
        
        console.log("Enviando nova build da pasta dist...")
        await client.uploadFromDir(path.resolve("dist"))
        
        console.log("--------------------------------------------------")
        console.log("🎉 Deploy concluído com sucesso no subdomínio!")
        console.log("--------------------------------------------------")
    } catch (err) {
        console.error("❌ Erro durante o deploy:", err)
    } finally {
        client.close()
    }
}

deploy()
