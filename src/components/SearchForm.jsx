import React from 'react';
import useForm from 'hooks/useForm';

const RATING = ['g', 'pg', 'pg-13', 'r'];

function SearchForm ({ onSubmit }) {
    const { keyword, times, rating, updateKeyword, updateRating } = useForm();

    const handleSubmit = e => {
      e.preventDefault();
      onSubmit({keyword, rating})
    }
    const handleOnChange = e => {
      updateKeyword(e.target.value)
    }

    const handleChangeRating = (evt) => {
      updateRating(evt.target.value)
    }
  

    return(
        <form onSubmit={handleSubmit}>
          <button type='submit'>Search</button>
          <input type="text" value={keyword} onChange={handleOnChange} placeholder='Search...'/>
          <select onChange={handleChangeRating} value={rating}>
            <option disabled>Rating type</option>
            {RATING.map(rating => <option key={rating}>{rating}</option>)}
          </select>
          <small>{times}</small>
        </form>
    )
}

export default React.memo(SearchForm);