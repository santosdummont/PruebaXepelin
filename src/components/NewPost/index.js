import React from 'react';
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';
import Form from '../Form';


const NewPost = ({
  onSubmit,
  onChange,
  titleValue,
  bodyValue,
  loading,
  error,
  children,
}) => (
    <Form>
      <Input
        label="Title"
        name="title"
        onChange={onChange}
        value={titleValue || ''}
        disabled={loading}
        error={(error && !titleValue) ? error : null}
      />
      <Textarea
        label="Message"
        name="body"
        onChange={onChange}
        value={bodyValue}
        disabled={loading}
        error={(error && !bodyValue) ? error : null}
      />
      <Button
        onClick={onSubmit}
        loading={loading}
        disabled={loading}
      >
        Send
      </Button>
      {children}
    </Form>
  )

export default NewPost;