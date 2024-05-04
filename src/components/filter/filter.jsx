import * as React from 'react';
import LocationFilter from './location-filter';
import ExperienceFilter from './experience-filter';
import NameFilter from './name-filter';
import RoleFilter from './role-filter';
import MinBasePayFilter from './min-base-pay-filter';

export default function Filter() {
    return (
      <div className='filter'>
        <LocationFilter />
        <ExperienceFilter />
        <NameFilter />
        <RoleFilter />
        <MinBasePayFilter />
      </div>
    )
}

