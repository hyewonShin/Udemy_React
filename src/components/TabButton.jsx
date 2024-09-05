export default function TabButton({ children }) {
  function handleClick() {
    console.log('안녕하십니까불이');
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
