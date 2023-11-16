import Query from './resolvers/Query';
import User from './resolvers/User';
import Tweet from './resolvers/Tweet';
import Mutation from './resolvers/Mutation';
import Db, { DbTweet, DbUser } from './db';
import { Resolvers } from './resolvers-types.generated';

export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbTweetToFavoriteCountMap: Record<string, number>;
  dbUserCache: Record<string, DbUser>;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
  User,
  Mutation,
  Tweet,
};

export default resolvers;
