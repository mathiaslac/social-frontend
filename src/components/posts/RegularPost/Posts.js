import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import useArticles from "../../../common/hooks/use-modal";

const App = () => {
  const { posts, select, selectedPost } = useArticles();

  return (
    <div>
      <LayoutGroup>
        {posts.map(({ id, title }) => (
          <motion.article
            key={id}
            layoutId={`${id}`}
            style={{
              background: "#232633",
              padding: 16,
              borderRadius: 16,
              margin: "16px 0 ",
            }}
            transition={{ duration: 0.25 }}
            onClick={() => select(id)}
          >
            <motion.h1 layoutId={`${id}-head`}>{title}</motion.h1>
          </motion.article>
        ))}

        <AnimatePresence>
          {selectedPost && (
            <motion.modal
              layoutId={`${selectedPost.id}`}
              transition={{ duration: 0.25 }}
              style={{
                position: "fixed",
                inset: 64,
                background: "#232633",
                padding: 16,
                borderRadius: 16,
                zIndex: 9999,
              }}
            >
              <motion.div>
                <button type="button" onClick={() => select(null)}>
                  Close
                </button>
                <motion.h1 layoutId={`${selectedPost.id}-head`}>
                  {selectedPost.title}
                </motion.h1>
                <p>{selectedPost.body}</p>
              </motion.div>
            </motion.modal>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};

export default App;
