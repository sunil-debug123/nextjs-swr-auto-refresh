export async function GET() {
    const users = [
      { id: 1, name: "Alice Johnson", email: "alice@example.com" },
      { id: 2, name: "Bob Smith", email: "bob@example.com" },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
      { id: 4, name: "Demo", email: "demo@example.com" },
    ];
  
    return Response.json(users);
  }
  