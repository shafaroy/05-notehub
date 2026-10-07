import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "./services/noteServices";

function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
      }),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  console.log(data);

  return (
    <div>
      <h1>NoteHub</h1>
    </div>
  );
}

export default App;
