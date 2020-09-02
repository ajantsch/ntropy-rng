import React from "react";
import axios from "axios";
import { Box, Button, Container, TextField, Typography } from "@material-ui/core";
import styled from "styled-components";

interface ServiceResponse {
  result: { draws: number[][] };
  serverSeed: string;
  nonce: string;
}

interface RNGParams {
  clientSeed: string;
  rangeStart: number;
  rangeEnd: number;
  selections: number;
  draws: number;
}

interface ResponseState extends RNGParams {
  serviceResponse: ServiceResponse;
}

interface AppState extends RNGParams {
  hashedServerSeed: string;
  response: ResponseState | undefined;
  verifyResponse: ResponseState | undefined;
}

const INITIAL_STATE: AppState = {
  hashedServerSeed: "",
  clientSeed: "test",
  rangeStart: 1,
  rangeEnd: 100,
  selections: 1,
  draws: 1,
  response: undefined,
  verifyResponse: undefined,
};

const { API_BASE_URL } = process.env;

class App extends React.Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
    this.state = INITIAL_STATE;
  }

  onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    axios.get<string>(`${API_BASE_URL}/hashed-server-seed`).then((res) => {
      console.warn("hashed server seed:", res.data);
      this.setState({ ...this.state, hashedServerSeed: res.data });
      const { clientSeed, rangeStart, rangeEnd, selections, draws } = this.state;
      axios
        .get<ServiceResponse>(`${API_BASE_URL}/result`, {
          params: { clientSeed, rangeStart, rangeEnd, selections, draws },
        })
        .then((res) => {
          this.setState({
            ...this.state,
            ...{
              response: { serviceResponse: res.data, ...{ clientSeed, rangeStart, rangeEnd, selections, draws } },
              verifyResponse: undefined,
            },
          });
        });
    });
  };

  verifyResponse = (e: React.FormEvent): void => {
    e.preventDefault();
    if (this.state.response) {
      axios
        .get(`${API_BASE_URL}/verify`, {
          params: {
            clientSeed: this.state.response.clientSeed,
            serverSeed: this.state.response.serviceResponse.serverSeed,
            nonce: this.state.response.serviceResponse.nonce,
            rangeStart: this.state.response.rangeStart,
            rangeEnd: this.state.response.rangeEnd,
            selections: this.state.response.selections,
            draws: this.state.response.draws,
          },
        })
        .then((res) => {
          this.setState({
            ...this.state,
            ...{
              verifyResponse: res.data,
            },
          });
        });
    }
  };

  render = (): React.ReactNode => {
    return (
      <AppContainer maxWidth="md">
        <Box>
          <Typography variant="h2">ntropy rng</Typography>
          <br />
          <form onSubmit={this.onSubmit}>
            <TextField
              id="clientSeed"
              value={this.state.clientSeed}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                this.setState({ ...this.state, clientSeed: e.target.value })
              }
              label="Client Seed"
            />
            <TextField
              id="rangeStart"
              type="number"
              value={this.state.rangeStart}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                this.setState({ ...this.state, rangeStart: e.target.value ? parseInt(e.target.value, 10) : 0 })
              }
              label="Range Start"
            />
            <TextField
              id="rangeEnd"
              type="number"
              value={this.state.rangeEnd}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                this.setState({ ...this.state, rangeEnd: e.target.value ? parseInt(e.target.value, 10) : 0 })
              }
              label="Range End"
            />
            <TextField
              id="selections"
              type="number"
              value={this.state.selections}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                this.setState({ ...this.state, selections: e.target.value ? parseInt(e.target.value, 10) : 0 })
              }
              label="Selections"
            />
            <TextField
              id="draws"
              type="number"
              value={this.state.draws}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                this.setState({ ...this.state, draws: e.target.value ? parseInt(e.target.value, 10) : 0 })
              }
              label="Draws"
            />
            <br />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
        <Box>
          {this.state.hashedServerSeed && <pre>hashed serverSeed: {this.state.hashedServerSeed}</pre>}
          {this.state.response?.serviceResponse && (
            <>
              <pre>{JSON.stringify(this.state.response.serviceResponse, null, 2)}</pre>
              <Button variant="contained" onClick={this.verifyResponse}>
                Verify
              </Button>
              {this.state.verifyResponse && <pre>{JSON.stringify(this.state.verifyResponse, null, 2)}</pre>}
            </>
          )}
        </Box>
      </AppContainer>
    );
  };
}

const AppContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export default App;
