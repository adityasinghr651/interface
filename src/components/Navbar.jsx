function Navbar(){
  return (
    <nav className="bg-blue-600 p-4 text-white flex justofy-between items-center">
      <h1 className="font-bold text-xl">AI Tutor</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
export default Navbar;