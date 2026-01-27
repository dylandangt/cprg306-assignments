import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <h2>Name: Dylan Dang</h2>
      <p>
        Github:{' '}
        <Link 
          href="https://github.com/dylandangt/cprg306-assignments" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          dylandangt/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}