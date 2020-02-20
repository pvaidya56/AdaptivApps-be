// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  profile: (where?: ProfileWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  profile: (where: ProfileWhereUniqueInput) => ProfileNullablePromise;
  profiles: (args?: {
    where?: ProfileWhereInput;
    orderBy?: ProfileOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Profile>;
  profilesConnection: (args?: {
    where?: ProfileWhereInput;
    orderBy?: ProfileOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProfileConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProfile: (data: ProfileCreateInput) => ProfilePromise;
  updateProfile: (args: {
    data: ProfileUpdateInput;
    where: ProfileWhereUniqueInput;
  }) => ProfilePromise;
  updateManyProfiles: (args: {
    data: ProfileUpdateManyMutationInput;
    where?: ProfileWhereInput;
  }) => BatchPayloadPromise;
  upsertProfile: (args: {
    where: ProfileWhereUniqueInput;
    create: ProfileCreateInput;
    update: ProfileUpdateInput;
  }) => ProfilePromise;
  deleteProfile: (where: ProfileWhereUniqueInput) => ProfilePromise;
  deleteManyProfiles: (where?: ProfileWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  profile: (
    where?: ProfileSubscriptionWhereInput
  ) => ProfileSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProfileOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "displayName_ASC"
  | "displayName_DESC"
  | "birthday_ASC"
  | "birthday_DESC"
  | "bio_ASC"
  | "bio_DESC"
  | "disability_ASC"
  | "disability_DESC"
  | "legal_ASC"
  | "legal_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ProfileWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ProfileWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  firstName?: Maybe<String>;
  firstName_not?: Maybe<String>;
  firstName_in?: Maybe<String[] | String>;
  firstName_not_in?: Maybe<String[] | String>;
  firstName_lt?: Maybe<String>;
  firstName_lte?: Maybe<String>;
  firstName_gt?: Maybe<String>;
  firstName_gte?: Maybe<String>;
  firstName_contains?: Maybe<String>;
  firstName_not_contains?: Maybe<String>;
  firstName_starts_with?: Maybe<String>;
  firstName_not_starts_with?: Maybe<String>;
  firstName_ends_with?: Maybe<String>;
  firstName_not_ends_with?: Maybe<String>;
  lastName?: Maybe<String>;
  lastName_not?: Maybe<String>;
  lastName_in?: Maybe<String[] | String>;
  lastName_not_in?: Maybe<String[] | String>;
  lastName_lt?: Maybe<String>;
  lastName_lte?: Maybe<String>;
  lastName_gt?: Maybe<String>;
  lastName_gte?: Maybe<String>;
  lastName_contains?: Maybe<String>;
  lastName_not_contains?: Maybe<String>;
  lastName_starts_with?: Maybe<String>;
  lastName_not_starts_with?: Maybe<String>;
  lastName_ends_with?: Maybe<String>;
  lastName_not_ends_with?: Maybe<String>;
  displayName?: Maybe<String>;
  displayName_not?: Maybe<String>;
  displayName_in?: Maybe<String[] | String>;
  displayName_not_in?: Maybe<String[] | String>;
  displayName_lt?: Maybe<String>;
  displayName_lte?: Maybe<String>;
  displayName_gt?: Maybe<String>;
  displayName_gte?: Maybe<String>;
  displayName_contains?: Maybe<String>;
  displayName_not_contains?: Maybe<String>;
  displayName_starts_with?: Maybe<String>;
  displayName_not_starts_with?: Maybe<String>;
  displayName_ends_with?: Maybe<String>;
  displayName_not_ends_with?: Maybe<String>;
  birthday?: Maybe<String>;
  birthday_not?: Maybe<String>;
  birthday_in?: Maybe<String[] | String>;
  birthday_not_in?: Maybe<String[] | String>;
  birthday_lt?: Maybe<String>;
  birthday_lte?: Maybe<String>;
  birthday_gt?: Maybe<String>;
  birthday_gte?: Maybe<String>;
  birthday_contains?: Maybe<String>;
  birthday_not_contains?: Maybe<String>;
  birthday_starts_with?: Maybe<String>;
  birthday_not_starts_with?: Maybe<String>;
  birthday_ends_with?: Maybe<String>;
  birthday_not_ends_with?: Maybe<String>;
  bio?: Maybe<String>;
  bio_not?: Maybe<String>;
  bio_in?: Maybe<String[] | String>;
  bio_not_in?: Maybe<String[] | String>;
  bio_lt?: Maybe<String>;
  bio_lte?: Maybe<String>;
  bio_gt?: Maybe<String>;
  bio_gte?: Maybe<String>;
  bio_contains?: Maybe<String>;
  bio_not_contains?: Maybe<String>;
  bio_starts_with?: Maybe<String>;
  bio_not_starts_with?: Maybe<String>;
  bio_ends_with?: Maybe<String>;
  bio_not_ends_with?: Maybe<String>;
  disability?: Maybe<String>;
  disability_not?: Maybe<String>;
  disability_in?: Maybe<String[] | String>;
  disability_not_in?: Maybe<String[] | String>;
  disability_lt?: Maybe<String>;
  disability_lte?: Maybe<String>;
  disability_gt?: Maybe<String>;
  disability_gte?: Maybe<String>;
  disability_contains?: Maybe<String>;
  disability_not_contains?: Maybe<String>;
  disability_starts_with?: Maybe<String>;
  disability_not_starts_with?: Maybe<String>;
  disability_ends_with?: Maybe<String>;
  disability_not_ends_with?: Maybe<String>;
  legal?: Maybe<Boolean>;
  legal_not?: Maybe<Boolean>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ProfileWhereInput[] | ProfileWhereInput>;
  OR?: Maybe<ProfileWhereInput[] | ProfileWhereInput>;
  NOT?: Maybe<ProfileWhereInput[] | ProfileWhereInput>;
}

export interface ProfileCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  displayName?: Maybe<String>;
  birthday?: Maybe<String>;
  bio?: Maybe<String>;
  disability?: Maybe<String>;
  legal?: Maybe<Boolean>;
}

export interface ProfileUpdateInput {
  email?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  displayName?: Maybe<String>;
  birthday?: Maybe<String>;
  bio?: Maybe<String>;
  disability?: Maybe<String>;
  legal?: Maybe<Boolean>;
}

export interface ProfileUpdateManyMutationInput {
  email?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  displayName?: Maybe<String>;
  birthday?: Maybe<String>;
  bio?: Maybe<String>;
  disability?: Maybe<String>;
  legal?: Maybe<Boolean>;
}

export interface ProfileSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProfileWhereInput>;
  AND?: Maybe<ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput>;
  OR?: Maybe<ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput>;
  NOT?: Maybe<ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Profile {
  id: ID_Output;
  email: String;
  firstName?: String;
  lastName?: String;
  displayName?: String;
  birthday?: String;
  bio?: String;
  disability?: String;
  legal?: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ProfilePromise extends Promise<Profile>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  displayName: () => Promise<String>;
  birthday: () => Promise<String>;
  bio: () => Promise<String>;
  disability: () => Promise<String>;
  legal: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ProfileSubscription
  extends Promise<AsyncIterator<Profile>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  displayName: () => Promise<AsyncIterator<String>>;
  birthday: () => Promise<AsyncIterator<String>>;
  bio: () => Promise<AsyncIterator<String>>;
  disability: () => Promise<AsyncIterator<String>>;
  legal: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ProfileNullablePromise
  extends Promise<Profile | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  displayName: () => Promise<String>;
  birthday: () => Promise<String>;
  bio: () => Promise<String>;
  disability: () => Promise<String>;
  legal: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ProfileConnection {
  pageInfo: PageInfo;
  edges: ProfileEdge[];
}

export interface ProfileConnectionPromise
  extends Promise<ProfileConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProfileEdge>>() => T;
  aggregate: <T = AggregateProfilePromise>() => T;
}

export interface ProfileConnectionSubscription
  extends Promise<AsyncIterator<ProfileConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProfileEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProfileSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ProfileEdge {
  node: Profile;
  cursor: String;
}

export interface ProfileEdgePromise extends Promise<ProfileEdge>, Fragmentable {
  node: <T = ProfilePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProfileEdgeSubscription
  extends Promise<AsyncIterator<ProfileEdge>>,
    Fragmentable {
  node: <T = ProfileSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProfile {
  count: Int;
}

export interface AggregateProfilePromise
  extends Promise<AggregateProfile>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProfileSubscription
  extends Promise<AsyncIterator<AggregateProfile>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ProfileSubscriptionPayload {
  mutation: MutationType;
  node: Profile;
  updatedFields: String[];
  previousValues: ProfilePreviousValues;
}

export interface ProfileSubscriptionPayloadPromise
  extends Promise<ProfileSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProfilePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProfilePreviousValuesPromise>() => T;
}

export interface ProfileSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProfileSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProfileSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProfilePreviousValuesSubscription>() => T;
}

export interface ProfilePreviousValues {
  id: ID_Output;
  email: String;
  firstName?: String;
  lastName?: String;
  displayName?: String;
  birthday?: String;
  bio?: String;
  disability?: String;
  legal?: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ProfilePreviousValuesPromise
  extends Promise<ProfilePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  displayName: () => Promise<String>;
  birthday: () => Promise<String>;
  bio: () => Promise<String>;
  disability: () => Promise<String>;
  legal: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ProfilePreviousValuesSubscription
  extends Promise<AsyncIterator<ProfilePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  displayName: () => Promise<AsyncIterator<String>>;
  birthday: () => Promise<AsyncIterator<String>>;
  bio: () => Promise<AsyncIterator<String>>;
  disability: () => Promise<AsyncIterator<String>>;
  legal: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Profile",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
