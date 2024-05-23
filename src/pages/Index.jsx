import { Container, Text, VStack, Input, Button, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Your Todo List</Text>
        <Text>Start adding your tasks to stay organized.</Text>
      <Input
          placeholder="Enter a new todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button onClick={addTodo} colorScheme="teal">Add</Button>
        <List spacing={3} width="100%">
          {todos.map((item, index) => (
            <ListItem key={index} p={2} borderWidth="1px" borderRadius="md">
              {item}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;