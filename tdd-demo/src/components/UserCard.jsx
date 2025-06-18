// export default function UserCard({ user, onSelect }) {
//   const joinedDate = new Date(user.joined).toLocaleDateString('en-US', {
//     month: 'short',
//     year: 'numeric',
//   });

//   const handleClick = () => {
//     console.log('User clicked:', user.name);
//     onSelect(user.id);
//   };

//   return (
//     <div onClick={handleClick}>
//       <h3>{user.name}</h3>
//       <p>Joined: {joinedDate}</p>
//     </div>
//   );
// }