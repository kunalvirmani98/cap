import * as React from 'react';
import LocationFilter from './location-filter';
import ExperienceFilter from './experience-filter';
import NameFilter from './name-filter';


export default function Filter() {
    return (
      <div className='d-flex'>
        <LocationFilter />
        <ExperienceFilter />
        <NameFilter />
      </div>
    )
}

