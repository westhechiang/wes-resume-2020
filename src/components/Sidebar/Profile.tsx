import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Stack } from '@chakra-ui/core';
import { ProfileImage } from './ProfileImage';
import { ProfileName } from './ProfileName';
import { ProfileTitle } from './ProfileTitle';
import { ProfileContact } from './ProfileContact';
import { ProfileSummary } from './ProfileSummary';
import { ProfileSkills } from './ProfileSkills';
import { Education } from './Education';
import { Projects } from './Projects';

export const Profile = () => {
  const {
    dataJson: {
      profile: { name, title, zh_title, contact, summary, skills },
    },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        profile {
          name {
            lastName
            nickName
            chineseName
          }
          title
          zh_title
          contact {
            email
            github
            linkedIn
            city
            zh_city
          }
          summary {
            highlight
            zh_highlight
            details
            zh_details
          }
          skills {
            languages
            zh_languages
            database
            zh_database
            technologies
            zh_technologies
            hobbies
            zh_hobbies
          }
        }
      }
    }
  `);
  return (
    <Stack direction="column" spacing={4}>
      <ProfileImage />
      <ProfileName {...name} />
      <ProfileTitle title={title} zh_title={zh_title} />
      <ProfileContact contact={contact} />
      <ProfileSummary {...summary} />
      <ProfileSkills skills={skills} />
      <Projects />
      <Education />
    </Stack>
  );
};
