import { Link, Outlet } from 'react-router';

export default function Layout() {
    return (
        <div>
            <header style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
                <nav style={{ display: 'flex', gap: 12 }}>
                    <Link to='/'>Home</Link>
                    <Link to='/easy'>Easy</Link>
                    <Link to='/medium'>Medium</Link>
                    <Link to='/hard'>Hard</Link>
                </nav>
            </header>
            <main style={{ padding: 16 }}>
                <Outlet />
            </main>
        </div>
    );
}
