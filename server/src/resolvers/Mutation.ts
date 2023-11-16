import { tweetTransform } from '../transforms';
import { TwitterResolverContext } from '../resolvers';
import { MutationResolvers } from '../resolvers-types.generated';

const mutationTwitterResolver: MutationResolvers<TwitterResolverContext> = {
  async createTweet(_parent, args, { dbTweetCache, db }) {
    const { body, userId } = args;
    const dbTweet = await db.createTweet({
      message: body,
      userId,
    });
    const dbTweetMap = (dbTweetCache ||= {});
    dbTweetMap[dbTweet.id] = dbTweet;
    const dbAuthor = db.getUserById(userId);

    if (!dbAuthor) throw new Error(`No author found for ${userId}`);

    return Object.assign(tweetTransform(dbTweet), { author: dbAuthor });
  },
};
export default mutationTwitterResolver;
function getUserById(userId: string) {
  throw new Error('Function not implemented.');
}
