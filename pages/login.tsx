import { getCsrfToken } from "next-auth/react";

export default function Login({ csrfToken }: { csrfToken: string }) {
  return (
    <div className="max-w-md mx-auto mt-10">
      <form method="post" action="/api/auth/callback/credentials" className="space-y-4">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div>
          <label>Usuário:</label>
          <input name="username" type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label>Senha:</label>
          <input name="password" type="password" className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Entrar</button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
