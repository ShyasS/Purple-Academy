import React from 'react';
import { MultiSelect } from '@mantine/core';  
function HomeFormMutiselect() {
  return (
    <div>
  <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      placeholder="Select Course Preferences"
      defaultValue={[]}
      clearButtonProps={{ 'aria-label': 'Clear selection' }}
      clearable
      style = {{border:'1px solid black', borderRadius:'3px',outlineColor:'black', fontweight:'600'}}
    />
    </div>
  );
}

export default HomeFormMutiselect;
