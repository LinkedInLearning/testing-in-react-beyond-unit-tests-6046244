import UserCard from './components/UserCard'

function App() {
  const sampleUser = {
    id: 1,
    name: 'Ayodele',
    joined: '2025-05-22'
  }

  const handleSelect = (userId) => {
    alert(`User ID selected: ${userId}`)
  }
  return (
    <div style={{ padding: '2rem' }}>
      <h1>UserCard Demo</h1>
      <UserCard user={sampleUser} onSelect={handleSelect} />
    </div>
  );
}

export default App;