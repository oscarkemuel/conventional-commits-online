import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaRegCopy } from "react-icons/fa";

import Layout from "../components/layout";
import {
  Container,
  Content,
  ContetForm,
  Display,
  Footer,
  Form,
} from "../styles/indexStyles";
import { types } from "../utils/types";
import { Commit } from "./types";

const urls = {
  conventionalCommits: "https://www.conventionalcommits.org/en/v1.0.0/",
  author: "https://oscarkemuel.com",
};

const Index = () => {
  const initialCommitData = {
    type: types[0],
    description: "",
    scope: "",
    body: "",
    footer: "",
  };
  const [commitData, setCommitData] = useState<Commit>(initialCommitData);

  function handleChangeValue(
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    if (name === "type") {
      setCommitData({
        ...commitData,
        type: JSON.parse(value),
      });
      return;
    }

    setCommitData({
      ...commitData,
      [name]: value.trim(),
    });
  }

  const commandMessage = `git commit -m "${commitData.type.type}${
    commitData.scope && `(${commitData.scope})`
  }: ${commitData.description}"${
    commitData.body && ` -m "${commitData.body}"`
  }${commitData.footer && ` -m "${commitData.footer}"`}`;

  async function handleCopyButton() {
    if (commitData.description) {
      navigator.clipboard
        .writeText(commandMessage)
        .then(() => toast.success("Successfully copied"))
        .catch(() => toast.error("Failed trying to copy"));
    } else {
      toast.error("Incomplete description");
    }
  }

  return (
    <Layout>
      <>
        <Container>
          <title>Conventional Commits Online</title>
          <h1>Conventional Commits Online</h1>

          <Content>
            <h2>Create commits quickly ⚡️</h2>
            <p className="text">
              Create your custom commits in a standardized way!! Learn more at{" "}
              <a href={urls.conventionalCommits} target="_blank">
                Conventional Commits Docs
              </a>
              .
            </p>

            <pre>
              <code>
                &lt;type&gt;[optional scope]: &lt;description&gt; [optional
                body] [optional footer(s)]
              </code>
            </pre>

            <ContetForm>
              <Form>
                <div className="control">
                  <label>Type*</label>
                  <select name="type" id="type" onChange={handleChangeValue}>
                    {types.map((type) => (
                      <option value={JSON.stringify(type)} key={type.type}>
                        {type.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="control">
                  <label>Scope</label>
                  <input
                    type="text"
                    name="scope"
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="control">
                  <label>Description*</label>
                  <textarea onChange={handleChangeValue} name="description" />
                </div>

                <div className="control">
                  <label>Body</label>
                  <textarea onChange={handleChangeValue} name="body" />
                </div>

                <div className="control">
                  <label>Footer(s)</label>
                  <textarea onChange={handleChangeValue} name="footer" />
                </div>
              </Form>

              <Display>
                <button
                  className="command"
                  type="button"
                  onClick={() => handleCopyButton()}
                >
                  <FaRegCopy />
                  {commandMessage}
                </button>

                <div className="description">
                  <p>
                    <span>Type*:</span> {commitData.type.title}
                  </p>
                  <p>
                    <span>Scope:</span> {commitData.scope}
                  </p>
                  <p>
                    <span>Description*:</span> {commitData.description}
                  </p>
                  <p>
                    <span>Body:</span> {commitData.body}
                  </p>
                  <p>
                    <span>Footer:</span> {commitData.footer}
                  </p>
                </div>
              </Display>
            </ContetForm>
          </Content>
        </Container>

        <Footer>
          <p>
            Made with 💜 by{" "}
            <a href={urls.author} target="_blank">
              Oscar Kemuel
            </a>
          </p>
        </Footer>
      </>
    </Layout>
  );
};

export default Index;
