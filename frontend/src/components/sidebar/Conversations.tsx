import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojies";

const Conversations = () => {
	const { conversations, loading } = useGetConversations();

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{
				conversations.map((conversation) => (
				<Conversation key={conversation.id} conversation={conversation} emoji={getRandomEmoji()} />
				))
			}
			{loading ? <span className="loading loading-spinner mx-auto" /> : null}
		</div>
	);
};
export default Conversations;