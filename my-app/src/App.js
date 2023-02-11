/*global chrome*/

import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const configuration = new Configuration({
    apiKey: "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",
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
    <Container>
          <div>
            <Typography variant="h3" gutterBottom align="center">
              <span style={{ color: 'red' }}>Symply</span>
              <span style={{ color: 'blue' }}>Kode</span>
            </Typography>
          </div>
            <TextField
              id="outlined-textarea"
              placeholder="Greatness Awaits..."
              multiline
              fullWidth
              autoFocus
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