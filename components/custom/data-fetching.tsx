// 'use client';
// import { useQuery } from '@tanstack/react-query';

// const fetchData = async () => {
//   const response = await fetch('http://localhost:3001/users');
//   return response.json();
// };

// function DataFetchingComponent() {
//   const { data, error, isLoading } = useQuery({ queryKey: ['data'], queryFn: fetchData });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>An error occurred</div>;

//   return (
//     <div>
//       <h2>Data from API</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

// export default DataFetchingComponent;
