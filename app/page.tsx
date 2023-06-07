import UserCard from './UserCard';
import LoginForm from './LoginForm';
import { getServerSession } from 'next-auth/next';
import { options } from './options';

export default async function Home() {
  const session = await getServerSession(options);
  console.log('session', session);
  return (
    <main>{session ? <UserCard user={session.user} /> : <LoginForm />}</main>
  );
}
