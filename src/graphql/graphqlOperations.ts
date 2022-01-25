import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A [RFC 5321](https://tools.ietf.org/html/rfc5321) compliant email. */
  Email: any;
  /** Arbitrary data encoded in JavaScript Object Notation. See https://www.json.org. */
  JSON: any;
};

export type Blog = {
  __typename?: 'Blog';
  body?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  dislike_count: Scalars['Int'];
  gallery?: Maybe<MediaPaginator>;
  id: Scalars['ID'];
  like_count: Scalars['Int'];
  publish_at?: Maybe<Scalars['Date']>;
  status: Scalars['Boolean'];
  tag?: Maybe<TagPaginator>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user: User;
};


export type BlogGalleryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type BlogTagArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BlogTagOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};

/** A paginated list of Blog items. */
export type BlogPaginator = {
  __typename?: 'BlogPaginator';
  /** A list of Blog items. */
  data: Array<Blog>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Allowed column names for Blog.tag.orderBy. */
export enum BlogTagOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Blog.tag.orderBy. */
export type BlogTagOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: BlogTagOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type Media = {
  __typename?: 'Media';
  collection_name: Scalars['String'];
  created_at: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  size: Scalars['Int'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
};

/** A paginated list of Media items. */
export type MediaPaginator = {
  __typename?: 'MediaPaginator';
  /** A list of Media items. */
  data: Array<Media>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFileBlog?: Maybe<Blog>;
  createBlog?: Maybe<Blog>;
  createTodo?: Maybe<Todo>;
  delFileBlog?: Maybe<Blog>;
  deleteTodo?: Maybe<Todo>;
  registerUser?: Maybe<User>;
  updateBlog?: Maybe<Blog>;
  updateTodo?: Maybe<Todo>;
};


export type MutationAddFileBlogArgs = {
  collection: Scalars['String'];
  file: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateBlogArgs = {
  body?: InputMaybe<Scalars['String']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title: Scalars['String'];
};


export type MutationCreateTodoArgs = {
  content: Scalars['String'];
};


export type MutationDelFileBlogArgs = {
  collection: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  media_id: Scalars['Int'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationRegisterUserArgs = {
  comfirm_password: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateBlogArgs = {
  body?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  tag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title: Scalars['String'];
};


export type MutationUpdateTodoArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  blog?: Maybe<Blog>;
  blogs?: Maybe<BlogPaginator>;
  me: User;
  myBlog?: Maybe<Blog>;
  myBlogs?: Maybe<BlogPaginator>;
  myTodo?: Maybe<Todo>;
  myTodos?: Maybe<TodoPaginator>;
  user?: Maybe<User>;
  users?: Maybe<UserPaginator>;
};


export type QueryBlogArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBlogsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryBlogsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMyBlogArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMyBlogsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryMyBlogsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMyTodoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMyTodosArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryMyTodosOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

/** Allowed column names for Query.blogs.orderBy. */
export enum QueryBlogsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.blogs.orderBy. */
export type QueryBlogsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryBlogsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.myBlogs.orderBy. */
export enum QueryMyBlogsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.myBlogs.orderBy. */
export type QueryMyBlogsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMyBlogsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.myTodos.orderBy. */
export enum QueryMyTodosOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.myTodos.orderBy. */
export type QueryMyTodosOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMyTodosOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['String'];
};

/** A paginated list of Tag items. */
export type TagPaginator = {
  __typename?: 'TagPaginator';
  /** A list of Tag items. */
  data: Array<Tag>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Todo = {
  __typename?: 'Todo';
  active: Scalars['Boolean'];
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  updated_at: Scalars['DateTime'];
  user: User;
};

/** A paginated list of Todo items. */
export type TodoPaginator = {
  __typename?: 'TodoPaginator';
  /** A list of Todo items. */
  data: Array<Todo>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Array<Media>>;
  avatar_url: Scalars['String'];
  blogs?: Maybe<BlogPaginator>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  email_verified_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  todos?: Maybe<TodoPaginator>;
  updated_at: Scalars['DateTime'];
};


export type UserBlogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserBlogsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type UserTodosArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserTodosOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};

/** Allowed column names for User.blogs.orderBy. */
export enum UserBlogsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for User.blogs.orderBy. */
export type UserBlogsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: UserBlogsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: 'UserPaginator';
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Allowed column names for User.todos.orderBy. */
export enum UserTodosOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for User.todos.orderBy. */
export type UserTodosOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: UserTodosOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type BlogFragment = { __typename?: 'Blog', id: string, title: string, body?: string | null | undefined, status: boolean, like_count: number, dislike_count: number, publish_at?: any | null | undefined, created_at: any, updated_at: any, user: { __typename?: 'User', id: string, name: string }, tag?: { __typename?: 'TagPaginator', data: Array<{ __typename?: 'Tag', id: string, name: string }> } | null | undefined, gallery?: { __typename?: 'MediaPaginator', data: Array<{ __typename?: 'Media', id: string, url: string }> } | null | undefined };

export type BlogsQueryVariables = Exact<{
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type BlogsQuery = { __typename?: 'Query', blogs?: { __typename?: 'BlogPaginator', data: Array<{ __typename?: 'Blog', id: string, title: string, body?: string | null | undefined, status: boolean, like_count: number, dislike_count: number, publish_at?: any | null | undefined, created_at: any, updated_at: any, user: { __typename?: 'User', id: string, name: string }, tag?: { __typename?: 'TagPaginator', data: Array<{ __typename?: 'Tag', id: string, name: string }> } | null | undefined, gallery?: { __typename?: 'MediaPaginator', data: Array<{ __typename?: 'Media', id: string, url: string }> } | null | undefined }>, paginatorInfo: { __typename?: 'PaginatorInfo', currentPage: number, lastPage: number } } | null | undefined };

export type MyBlogsQueryVariables = Exact<{
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type MyBlogsQuery = { __typename?: 'Query', myBlogs?: { __typename?: 'BlogPaginator', data: Array<{ __typename?: 'Blog', id: string, title: string, body?: string | null | undefined, status: boolean, like_count: number, dislike_count: number, publish_at?: any | null | undefined, created_at: any, updated_at: any, user: { __typename?: 'User', id: string, name: string }, tag?: { __typename?: 'TagPaginator', data: Array<{ __typename?: 'Tag', id: string, name: string }> } | null | undefined, gallery?: { __typename?: 'MediaPaginator', data: Array<{ __typename?: 'Media', id: string, url: string }> } | null | undefined }>, paginatorInfo: { __typename?: 'PaginatorInfo', currentPage: number, lastPage: number } } | null | undefined };

export type UserFragment = { __typename?: 'User', id: string, name: string, email: string, email_verified_at: any, avatar_url: string, created_at: any, updated_at: any };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name: string, email: string, email_verified_at: any, avatar_url: string, created_at: any, updated_at: any } };

export type TodoFragment = { __typename?: 'Todo', id: string, content: string, active: boolean, created_at: any, updated_at: any };

export type MyTodoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MyTodoQuery = { __typename?: 'Query', myTodo?: { __typename?: 'Todo', id: string, content: string, active: boolean, created_at: any, updated_at: any } | null | undefined };

export type MyTodosQueryVariables = Exact<{
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type MyTodosQuery = { __typename?: 'Query', myTodos?: { __typename?: 'TodoPaginator', data: Array<{ __typename?: 'Todo', id: string, content: string, active: boolean, created_at: any, updated_at: any }> } | null | undefined };

export type CreateTodoMutationVariables = Exact<{
  content: Scalars['String'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'Todo', id: string, content: string, active: boolean, created_at: any, updated_at: any } | null | undefined };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID'];
  content?: InputMaybe<Scalars['String']>;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, content: string, active: boolean, created_at: any, updated_at: any } | null | undefined };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'Todo', id: string, content: string, active: boolean, created_at: any, updated_at: any } | null | undefined };

export const BlogFragmentDoc = gql`
    fragment blog on Blog {
  id
  title
  body
  status
  like_count
  dislike_count
  publish_at
  created_at
  updated_at
  user {
    id
    name
  }
  tag {
    data {
      id
      name
    }
  }
  gallery {
    data {
      id
      url
    }
  }
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  id
  name
  email
  email_verified_at
  avatar_url
  created_at
  updated_at
}
    `;
export const TodoFragmentDoc = gql`
    fragment todo on Todo {
  id
  content
  active
  created_at
  updated_at
}
    `;
export const BlogsDocument = gql`
    query blogs($first: Int!, $page: Int) {
  blogs(first: $first, page: $page) @connection(key: "blogs", filter: ["page"]) {
    data {
      ...blog
    }
    paginatorInfo {
      currentPage
      lastPage
    }
  }
}
    ${BlogFragmentDoc}`;

/**
 * __useBlogsQuery__
 *
 * To run a query within a Vue component, call `useBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useBlogsQuery({
 *   first: // value for 'first'
 *   page: // value for 'page'
 * });
 */
export function useBlogsQuery(variables: BlogsQueryVariables | VueCompositionApi.Ref<BlogsQueryVariables> | ReactiveFunction<BlogsQueryVariables>, options: VueApolloComposable.UseQueryOptions<BlogsQuery, BlogsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<BlogsQuery, BlogsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<BlogsQuery, BlogsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<BlogsQuery, BlogsQueryVariables>(BlogsDocument, variables, options);
}
export type BlogsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<BlogsQuery, BlogsQueryVariables>;
export const MyBlogsDocument = gql`
    query myBlogs($first: Int!, $page: Int) {
  myBlogs(first: $first, page: $page) @connection(key: "myBlogs", filter: ["page"]) {
    data {
      ...blog
    }
    paginatorInfo {
      currentPage
      lastPage
    }
  }
}
    ${BlogFragmentDoc}`;

/**
 * __useMyBlogsQuery__
 *
 * To run a query within a Vue component, call `useMyBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyBlogsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMyBlogsQuery({
 *   first: // value for 'first'
 *   page: // value for 'page'
 * });
 */
export function useMyBlogsQuery(variables: MyBlogsQueryVariables | VueCompositionApi.Ref<MyBlogsQueryVariables> | ReactiveFunction<MyBlogsQueryVariables>, options: VueApolloComposable.UseQueryOptions<MyBlogsQuery, MyBlogsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MyBlogsQuery, MyBlogsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MyBlogsQuery, MyBlogsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MyBlogsQuery, MyBlogsQueryVariables>(MyBlogsDocument, variables, options);
}
export type MyBlogsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MyBlogsQuery, MyBlogsQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...user
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a Vue component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMeQuery();
 */
export function useMeQuery(options: VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MeQuery, MeQueryVariables>(MeDocument, {}, options);
}
export type MeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MeQuery, MeQueryVariables>;
export const MyTodoDocument = gql`
    query myTodo($id: ID!) {
  myTodo(id: $id) {
    ...todo
  }
}
    ${TodoFragmentDoc}`;

/**
 * __useMyTodoQuery__
 *
 * To run a query within a Vue component, call `useMyTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTodoQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMyTodoQuery({
 *   id: // value for 'id'
 * });
 */
export function useMyTodoQuery(variables: MyTodoQueryVariables | VueCompositionApi.Ref<MyTodoQueryVariables> | ReactiveFunction<MyTodoQueryVariables>, options: VueApolloComposable.UseQueryOptions<MyTodoQuery, MyTodoQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MyTodoQuery, MyTodoQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MyTodoQuery, MyTodoQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MyTodoQuery, MyTodoQueryVariables>(MyTodoDocument, variables, options);
}
export type MyTodoQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MyTodoQuery, MyTodoQueryVariables>;
export const MyTodosDocument = gql`
    query myTodos($first: Int!, $page: Int) {
  myTodos(first: $first, page: $page) {
    data {
      ...todo
    }
  }
}
    ${TodoFragmentDoc}`;

/**
 * __useMyTodosQuery__
 *
 * To run a query within a Vue component, call `useMyTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTodosQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMyTodosQuery({
 *   first: // value for 'first'
 *   page: // value for 'page'
 * });
 */
export function useMyTodosQuery(variables: MyTodosQueryVariables | VueCompositionApi.Ref<MyTodosQueryVariables> | ReactiveFunction<MyTodosQueryVariables>, options: VueApolloComposable.UseQueryOptions<MyTodosQuery, MyTodosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MyTodosQuery, MyTodosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MyTodosQuery, MyTodosQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MyTodosQuery, MyTodosQueryVariables>(MyTodosDocument, variables, options);
}
export type MyTodosQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MyTodosQuery, MyTodosQueryVariables>;
export const CreateTodoDocument = gql`
    mutation createTodo($content: String!) {
  createTodo(content: $content) {
    ...todo
  }
}
    ${TodoFragmentDoc}`;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateTodoMutation({
 *   variables: {
 *     content: // value for 'content'
 *   },
 * });
 */
export function useCreateTodoMutation(options: VueApolloComposable.UseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
}
export type CreateTodoMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateTodoMutation, CreateTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($id: ID!, $content: String) {
  updateTodo(id: $id, content: $content) {
    ...todo
  }
}
    ${TodoFragmentDoc}`;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateTodoMutation({
 *   variables: {
 *     id: // value for 'id'
 *     content: // value for 'content'
 *   },
 * });
 */
export function useUpdateTodoMutation(options: VueApolloComposable.UseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
}
export type UpdateTodoMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    ...todo
  }
}
    ${TodoFragmentDoc}`;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteTodoMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(options: VueApolloComposable.UseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>>) {
  return VueApolloComposable.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
}
export type DeleteTodoMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteTodoMutation, DeleteTodoMutationVariables>;