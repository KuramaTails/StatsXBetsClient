import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./themes/index";
import Head from "./components/Head";
import Main from "./components/Main";
import socketIO from "socket.io-client";
const socket = socketIO.connect("https://statsxbetsapi.onrender.com/", {
  withCredentials: false,
});
// const socket = socketIO.connect("https://statsxbets.onrender.com");
const queryClient = new QueryClient();

function App() {
  socket.on("connect", () => {
    console.log(socket.id);
  });

  socket.on("disconnect", () => {
    console.log(socket.id);
  });
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <ThemeProvider theme={theme.ligueOne}>
        <Head />
        <Main socket={socket} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
