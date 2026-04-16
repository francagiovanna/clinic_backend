import type { PrismaClient, Token, Usuario } from "../prisma/generated/prisma/client";
import { prisma } from "../prisma/prisma";

class AuthRepository {
    constructor(private readonly prisma: PrismaClient) {
        this.prisma = prisma
    }
    async cadastrar(dadosUsuario: Usuario) {
        return await this.prisma.usuario.create({
            data: dadosUsuario
        })
    }

    async existeUsuario(email: string) {
        return await this.prisma.usuario.findMany({
            where: {
                email: email
            }
        })
    }

    async criarToken(dadosToken: Token) {
        return await this.prisma.token.create({
            data: dadosToken
        })
    }

}


export const authRepository = new AuthRepository(prisma)
