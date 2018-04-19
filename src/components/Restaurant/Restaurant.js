import React, { Component } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import Files from 'react-files';

import { database, storage } from '../../config/firebase';

import './Restaurant.css';

class Restaurant extends Component {

  onFilesChange = files => {
    const { uid, user } = this.props;
    const file = files[0];
    const uploadTask = storage.ref('/restaurant-images')
                              .child(uid)
                              .child(user.uid)
                              .child(file.name)
                              .put(file, { contentType: file.type });
  
    uploadTask.then((snapshot) => {
      database.ref('/restaurants')
              .child(uid)
              .child('imageUrl')
              .set(snapshot.downloadURL);
    });
  };

  onFilesError = (error, file) => {
    console.log(`Error code ${error.code}: ${error.message}`);
  };

  render() {
    const { name, votes, user, handleSelect, handleUnselect, imageUrl } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);

    return (
      <article className="Restaurant">
        <h3>{ name }</h3>
        <ul>
          { votes && map(votes, (vote, key) => <li key={key}>{ vote }</li>) }
        </ul>
        {
          userHasSelected 
          ? <button className="destructive" onClick={handleUnselect}>
              Nah, nevermind
            </button>
          : <button onClick={handleSelect}>
              Yea, I'd go there
            </button>
        }
        <div className="Restaurant--images">
          <Files
            className='files-dropzone'
            onChange={this.onFilesChange}
            onError={this.onFilesError}
            accepts={['image/*']}
            multiple={false}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            { imageUrl && <img src={imageUrl} alt={name} /> }
            <div>Drop files here or click to upload</div>
          </Files>
        </div>
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;