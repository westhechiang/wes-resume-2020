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
      profile: { name, title, contact, summary, skills },
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
          contact {
            email
            github
            linkedIn
            city
          }
          summary {
            highlight
            details
          }
          skills {
            languages
            database
            technologies
            hobbies
          }
        }
      }
    }
  `);
  return (
    <Stack direction="column" spacing={4}>
      <ProfileImage />
      <ProfileName {...name} />
      <ProfileTitle title={title} />
      <ProfileContact contact={contact} />
      <ProfileSummary {...summary} />
      <ProfileSkills skills={skills} />
      <Projects />
      <Education />
    </Stack>
  );
};
