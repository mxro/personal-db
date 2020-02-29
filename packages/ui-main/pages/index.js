import Link from 'next/Link';

export default function Index() {
  return (
    <div>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  );
}