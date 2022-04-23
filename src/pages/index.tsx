import React, { useState } from "react"
import { toast } from "react-toastify"

import Layout from "../components/layout"
import { Container, Content, ContetForm, Display, Form } from '../styles/indexStyles'
import { scopes } from "../utils/scopes"
import { types } from "../utils/types"

const IndexPage = () => {
  const [selectedType, setSelectedType] = useState(types[0]);
  const [description, setDescription] = useState('');
  const [scope, setScope] = useState(scopes[0]);
  const [body, setBody] = useState('');
  const [footer, setFooter] = useState('');

  function formatText(text: string): string {
    return text.trim();
  }

  function handleTypeChange(e: React.ChangeEvent<HTMLSelectElement>){
    setSelectedType(JSON.parse(e.target.value))
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    setDescription(formatText(e.target.value))
  }

  function handleScopeChange(e: React.ChangeEvent<HTMLSelectElement>){
    setScope(formatText(e.target.value))
  }

  function handleBodyChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    setBody(formatText(e.target.value))
  }

  function handleFooterChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    setFooter(formatText(e.target.value))
  }

  const commandMessage = 
    `git commit -m "${selectedType.type}${scope && `(${scope})`}: ${description}"${body && ` -m "${body}"`}${footer && ` -m "${footer}"`}`


  async function handleCopyButton() {
    if(description){
      navigator.clipboard.writeText(commandMessage)
      .then(function() {
        toast.success('Successfully copied')
      }, function(err) {
        toast.error('Failed trying to copy')
    });
    }else {
      toast.error('Incomplete description')
    }
  }

  return (
    <Layout>
      <Container>
        <title>Conventional Commits Online</title>
        <h1 >Conventional Commits Online</h1>

        <Content>
          <h2>Create commits quickly ⚡️</h2>
          <p className="text">
            Create your custom commits in a standardized way!! Learn more at {" "}
            <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">
              Conventional Commits Docs
            </a>
            .
          </p>

          <pre>
            <code>
              &lt;type&gt;[optional scope]: &lt;description&gt;
              [optional body]
              [optional footer(s)]
            </code>
          </pre>

          <ContetForm>
            <Form>
              <div className="control">
                <label>Type*</label>
                <select name="type" id="type" onChange={handleTypeChange}>
                  {types.map((type) => (
                    <option value={JSON.stringify(type)} key={type.type}>
                      {type.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="control">
                <label>Description*</label>
                <textarea onChange={handleDescriptionChange}/>
              </div>

              <div className="control">
                <label>Scope</label>
                <select name="scope" id="scope" onChange={handleScopeChange}>
                  {scopes.map((scope) => (
                    <option value={scope} key={scope}>
                      {scope}
                    </option>
                  ))}
                </select>
              </div>

              <div className="control">
                <label>Body</label>
                <textarea onChange={handleBodyChange} />
              </div>

              <div className="control">
                <label>Footer(s)</label>
                <textarea onChange={handleFooterChange} />
              </div>
            </Form>

            <Display>
              <button className="command" type="button" onClick={() => handleCopyButton()}>
                {commandMessage}
              </button>
             
              <div className="description">
                <p><span>Type*:</span> {selectedType.title}</p>
                <p><span>Description*:</span> {description}</p>
                <p><span>Scope:</span> {scope}</p>
                <p><span>Body:</span> {body}</p>
                <p><span>Footer:</span> {footer}</p>
              </div>

            </Display>
          </ContetForm>

          
        </Content>
      </Container>
    </Layout>
  )
}

export default IndexPage
