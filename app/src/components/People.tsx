import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import Person, { ListItem } from './Person';
import { IPerson } from './types';
import Loader from './Loader';

import { LoaderBox, List, Pagination, PeoplePage } from './styles'

const GET_PEOPLE = gql`
  query random($page: Int) {
    people(page: $page) {
      next
      prev
      count
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;


const People = function (): any {
  const perPage = 10
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)
  const [people, setPeople] = useState<IPerson[]>([])
  const [selected, setSelected] = useState<IPerson | null>(null)

  const { loading, error } = useQuery(GET_PEOPLE, {
    variables: { page },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      const { people: { count, results } } = data
      setPeople(results)
      setPageCount(Math.floor(count / perPage) + 1)
      setSelected(null)
    }
  },
  );

  const renderPagination = () => {
    if (pageCount > 1) {
      const items = [];
      for (let i = 1; i <= pageCount; i++) {
        items.push(
          <button key={i} className={`page-item ${page === i ? 'active' : ''}`} onClick={() => setPage(i)}>
            {i}
          </button>
        )
      }
      return items;
    }
  }

  if (loading) {
    return <LoaderBox>
      <Loader />
    </LoaderBox>
  }

  if (error) {
    return (
      <div style={{ marginTop: '10%', textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>
        An error occurred! Reload page to try again.
      </div>
    )
  }

  return (
    <>
      {pageCount > 1 && <Pagination>
        {renderPagination()}
      </Pagination>}
      <PeoplePage className={selected ? 'with-selected': ''} selected={!!selected}>
        <div className="page-left">
          <List>
            {people.length && people.map((person: IPerson): any => <ListItem
              key={person.name}
              selected={!!selected && selected.name === person.name}
              onSelect={() => setSelected(person)}
              {...person}
            />)}
          </List>
        </div>
        {selected && <div className="page-right">
          <Person {...selected} />
        </div>}
      </PeoplePage>
    </>
  );
}

export default People;