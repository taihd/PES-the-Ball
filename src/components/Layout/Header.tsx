import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-xl sm:text-2xl font-bold">
            PES Match Balancer
          </Link>
          <nav className="flex gap-2 sm:gap-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                isActive('/') ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              Generate Match
            </Link>
            <Link
              to="/profiles"
              className={`px-3 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                isActive('/profiles') ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              Profiles
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
