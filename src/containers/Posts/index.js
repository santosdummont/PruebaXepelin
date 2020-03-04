import React from 'react';
import Section from '../../components/Section';
import Post from '../../components/Post';
import styles from './Posts.module.scss';
import NewPost from '../../components/NewPost';
import SideBar from '../../components/SideBar';
import SideBarButton from '../../components/SideBarButton';
import PostDetail from '../../components/PostDetail';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { faPlus, faBookReader } from '@fortawesome/free-solid-svg-icons';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: 100,
      posts: false,
      visibleSection: 'newPost',
      newPost: {
        title: '',
        body: '',
      },
      selectedPost: false,
      loading: false,
      error: false,
      errorMessage: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({
          posts: json,
        })
      })
  }

  onSubmitNewPost = (state) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: state.title,
        body: state.body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          loading: false,
          newPost: {
            title: false,
            body: false,
          },
        })
        console.log(json)
        console.log('newPost', this.state.newPost)
      })
      .catch(error => {
        this.setState({
          loading: false,
          errorMessage: "An error has ocurred, please try again",
        })
      })
  }



  onClickNewPost = () => {
    if (this.state.newPost.title !== '' && this.state.newPost.body !== '') {
      this.setState({
        loading: true,
      })
      return this.onSubmitNewPost(this.state.newPost);
    }
    return this.setState({
      error: true,
      errorMessage: 'Please complete all fields'
    })
  }

  toggleSections = (e) => {
    this.setState({
      visibleSection: e,
    })
  }

  fetchPost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          selectedPost: json,
        })
      })
      .catch(error => {
        this.setState({
          visibleSection: 'listPosts',
        })
      })
  }

  onClickPost = (id) => {
    this.setState({
      visibleSection: 'post',
      selectedPost: false,
    })
    this.fetchPost(id);
  }

  onChangeNewPost = (e) => {
    if (e.target.name === 'title') {
      this.setState({
        newPost: {
          ...this.state.newPost,
          title: e.target.value,
        },
        errorMessage: false,
      })
    }
    if (e.target.name === 'body') {
      this.setState({
        newPost: {
          ...this.state.newPost,
          body: e.target.value
        },
        errorMessage: false,
      })
    }
    return this.state.newPost;
  }


  render() {

    const {
      posts,
      visibleSection,
      newPost,
      loading,
      error,
      selectedPost,
      errorMessage,
    } = this.state;

    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <Section>
              <SideBar>
                <SideBarButton
                  isActive={visibleSection === 'newPost'}
                  onClick={() => this.toggleSections('newPost')}
                  text="New Post"
                  icon={faPlus}
                />
                <SideBarButton
                  isActive={visibleSection === 'listPosts'}
                  onClick={() => this.toggleSections('listPosts')}
                  text="List posts"
                  icon={faBookReader}
                />
              </SideBar>
            </Section>
          </div>

          {visibleSection === 'newPost' &&
            <Section title="New Post">
              <NewPost
                titleValue={newPost.title}
                bodyValue={newPost.body}
                onChange={(e) => this.onChangeNewPost(e)}
                onSubmit={this.onClickNewPost}
                loading={loading}
                error={error}
              >
                {errorMessage}
              </NewPost>

            </Section>
          }
          {visibleSection === 'listPosts' &&
            <Section title="List posts" >
              {posts ? posts.map((post, index) => (
                <Post
                  key={index}
                  title={post.title}
                  body={post.body}
                  onClick={() => this.onClickPost(post.id)}
                >
                </Post>
              )) : <Loading />}
            </Section>
          }

          {visibleSection === 'post' &&
            <Section title="Post detail">
              <Card>
                {selectedPost ? <PostDetail
                  id={selectedPost.id}
                  userId={selectedPost.userId}
                  title={selectedPost.title}
                  body={selectedPost.body}
                /> : <Loading />
                }
              </Card>
            </Section>
          }
        </div>

      </React.Fragment>
    );
  }
}


export default Posts;