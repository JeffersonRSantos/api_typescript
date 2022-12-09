import { z } from 'zod'

const loginAuthSchema = async (props: Object) => {
        const obj = z.object({
            nome: z.string().min(4, {message: "Campo nome precisa conter no mínimo 4 caracteres."}),
            email: z.string().email({message: "Campo e-mail, com formato inválido."}),
            password: z.string().min(6, {message: "Campo senha precisa conter no mínimo 6 caracteres."})
        }).safeParse(props);

        if (!obj.success) {
            obj.error.issues;
          }

        return obj

}

export { loginAuthSchema }