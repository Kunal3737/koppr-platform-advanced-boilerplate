import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ApolloGraphql = () => (
  <Query
    query= {gql`
      {
          createCompany {
              id
          },
      }
    `}
  >

    {({ loading, error, data }) => {
      if (loading) return <p>Loading... </p>;
      if (error) return <p>Error... </p>;

      return data.createCompany.map(
        (items) => (
            console.log(items)
            // { items.id }
        //   <div key={items.id}>
        //     <p>{items.id}</p>
        //   </div>
        ),
      );
    }}
  </Query>
);

export default ApolloGraphql;
