/*global chrome*/

import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const configuration = new Configuration({
    apiKey: "API_KEY",
  });


  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    chrome.storage.local.get(null, function (data) {
      if ("prompt" in data) {
        setPrompt(data.prompt);
      }
    });
  }, []);

  async function handleSubmit() {
  
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Summarize for a 2nd grader" + prompt,
      max_tokens: 100,
      temperature: 0.7,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    });
    setResponse(completion.data.choices[0].text);
  }

  

  return (
        <Container style={{ backgroundColor: '#585857', height: '100vh' }}>
        <div> 
            <Typography variant="h3" gutterBottom align="center" paddingY={3}>
              <span style={{ color: '#EEF055' }}>Symply</span> 
              <span style={{ color: '#20201E' }}>Kode</span> 
            </Typography> 
          </div>
          <TextField
            className="no-outline"
            variant="outlined"
            id="outlined-textarea"
            placeholder="Greatness Awaits..."
            InputProps={{
              style: {
                backgroundColor: '#585857',
                color: '#F9F9F6',
                borderColor: '#ABABA8',
                borderWidth: 6,
                borderStyle: 'solid'
              }
            }}
            InputLabelProps={{
              style: {
                color: '#ABABA8'
              }
            }}
            FormHelperTextProps={{
              style: {
                color: '#ABABA8'
              }
            }}
            multiline
            fullWidth
            rows={5}
            maxRows={5}
            margin="normal"
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
              chrome.storage.local.set({ prompt: e.target.value });
            }}
          />





            <Button
              fullWidth
              disableElevation
              variant="contained"
              onClick={() => handleSubmit()}
      >
              Submit
            </Button>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Paper sx={{ p: 3 }}>{response}</Paper>
          </Grid>
    </Container>
  );
}

export default App;
