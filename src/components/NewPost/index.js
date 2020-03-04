import React from 'react';
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';
import Card from '../Card';
import Form from '../Form';
import styles from './NewPost.module.scss';

const NewPost = ({
  onClick,
  onChangeTitle,
  onChangeMessage,
  titleValue,
  messageValue,
}) => (
    <Form>
      <Input
        label="Title"
        onChange={onChangeTitle}
        value={titleValue}
      />
      <Textarea
        label="Message"
        onChange={onChangeMessage}
        value={messageValue}
      />
      <Button onClick={onClick}>Send</Button>
    </Form>
  )

export default NewPost;