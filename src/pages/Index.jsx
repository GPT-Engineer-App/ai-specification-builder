import { Container, Text, VStack, Input, Button, List, ListItem, Checkbox } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setCompletedTodos([...completedTodos, false]);
      setTodo("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const handleSave = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editText;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText("");
  };

  const toggleComplete = (index) => {
    const updatedCompletedTodos = [...completedTodos];
    updatedCompletedTodos[index] = !updatedCompletedTodos[index];
    setCompletedTodos(updatedCompletedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    const updatedCompletedTodos = completedTodos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setCompletedTodos(updatedCompletedTodos);
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
            <ListItem key={index} p={2} borderWidth="1px" borderRadius="md" display="flex" alignItems="center">
              <Checkbox isChecked={completedTodos[index]} onChange={() => toggleComplete(index)} mr={2} />
              {editIndex === index ? (
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  mr={2}
                />
              ) : (
                <Text flex="1" textDecoration={completedTodos[index] ? "line-through" : "none"}>{item}</Text>
              )}
              {editIndex === index ? (
                <Button onClick={handleSave} colorScheme="teal" size="sm" ml={2}>Save</Button>
              ) : (
                <Button onClick={() => handleEdit(index)} colorScheme="teal" size="sm" ml={2}>Edit</Button>
              )}
              <Button onClick={() => deleteTodo(index)} colorScheme="red" size="sm" ml={2}>Delete</Button>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;