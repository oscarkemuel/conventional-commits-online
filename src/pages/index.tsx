import React, { useState } from "react"
import { toast } from "react-toastify"

import Layout from "../components/layout"
import { Container, Content, ContetForm, Display, Form } from '../styles/indexStyles'
import { types } from "../utils/types"

const IndexPage = () => {
  const [selectedType, setSelectedType] = useState(types[0]);
  const [description, setDescription] = useState('');
  const [scope, setScope] = useState('');
  const [body, setBody] = useState('');
  const [footer, setFooter] = useState('');

  function formatText(text: string): string {
    return text.toLowerCase().trim();
  }

  function handleTypeChange(e: React.ChangeEvent<HTMLSelectElement>){
    setSelectedType(JSON.parse(e.target.value))
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    setDescription(formatText(e.target.value))
  }

  function handleScopeChange(e: React.ChangeEvent<HTMLInputElement>){
    setScope(formatText(e.target.value))
  }

  function handleBodyChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    setBody(formatText(e.target.value))
  }

  function handleFooterChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    setFooter(formatText(e.target.value))
  }

  const commandMessage = 
    `git commit -m "${selectedType.type}${scope && `(${scope})`}: ${description}" ${body && ` -m "${body} \n ${footer}"`}`


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
          <p className="text">Create your custom commits in a standardized way!!</p>

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
                      {type.title} - {type.type}
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
                <input type="text" onChange={handleScopeChange} />
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
