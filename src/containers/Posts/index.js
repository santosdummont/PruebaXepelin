import React from 'react';
import Section from '../../components/Section';
import Post from '../../components/Post';
import axios from 'axios';
import styles from './Posts.module.scss';
import NewPost from '../../components/NewPost';
import SideBar from '../../components/SideBar';
import SideBarButton from '../../components/SideBarButton';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: false,
      visibleSection: 'newPost',
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts: response.data,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  onPostClick = (userID, id) => {
    console.log('onPostClick', userID, id)
  }

  onPostSubmit = (userID, id) => {
    console.log('onPostClick', userID, id)
  }

  toggleSections = (e) => {
    this.setState({
      visibleSection: e,
    })
  }


  render() {

    const {
      posts,
      visibleSection,
    } = this.state;

    return (
      <React.Fragment>
        <div className={styles.container}>
          <SideBar>
            <SideBarButton
              isActive={visibleSection === 'New post'}
              onClick={() => this.toggleSections('newPost')}
              text="New Post"
            />
            <SideBarButton
              isActive={visibleSection === 'List posts'}
              onClick={() => this.toggleSections('listPosts')}
              text="List posts"
            />
          </SideBar>

          {visibleSection === 'newPost' &&
            <Section title="New Post">
              <NewPost />
            </Section>
          }
          {visibleSection === 'listPosts' &&
            <Section title="List posts" >
              {posts && posts.map((post, index) => (
                <Post
                  key={index}
                  title={post.title}
                  body={post.body}
                  onClick={() => this.onPostClick(post.userId, post.id)}
                >
                </Post>
              ))}
            </Section>
          }
        </div>

      </React.Fragment>
    );
  }
}


export default Posts;