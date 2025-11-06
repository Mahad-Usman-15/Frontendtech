
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isActive, setIsActive] = useState(false);
  const router = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Handle clicks outside the search area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus input when activated
  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsActive(false);
      setSearchQuery("");
    }
  };

  const toggleSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Button (Mobile & Desktop) */}
      <button
        className={`text-blue-900 w-6 h-6 transition-all duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}
        onClick={toggleSearch}
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="20px"
          className="fill-current"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
      </button>

      {/* Expanded Search (Mobile & Desktop) */}
      <div className={`
        fixed inset-0 z-50 flex items-start justify-center
        transition-all duration-300 ease-in-out 
        ${isActive ? 'opacity-100 visible ' : 'opacity-0 invisible'}
      `}>
        {/* Backdrop */}
        <div 
          className={`
            absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm
            transition-opacity duration-300
            ${isActive ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={toggleSearch}
        />
        
        {/* Search Container */}
        <div className={`
          relative z-10 w-full  px-4
          transition-all duration-300 transform
          ${isActive ? 'translate-y-0' : '-translate-y-8'}
        `}>
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search products..."
                className={`
                  w-full h-16 px-6 pr-16 text-lg rounded-lg
                  bg-white mt-5 backdrop-blur-sm
                  border-2 border-gray-200 focus:border-red-500
                  outline-none shadow-xl
                  transition-all duration-300
                `}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                onClick={toggleSearch}
                className={`
                  absolute right-4 top-1/2 transform -translate-y-1/2
                  text-gray-500 hover:text-gray-700
                  transition-colors duration-200
                `}
                aria-label="Close search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-current"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}