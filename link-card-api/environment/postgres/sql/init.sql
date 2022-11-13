CREATE SEQUENCE IF NOT EXISTS link_id_seq;

CREATE TABLE IF NOT EXISTS link (
    id INTEGER PRIMARY KEY DEFAULT nextval('link_id_seq'),
    user_id INTEGER NOT NULL,
    link TEXT NOT NULL,
    title TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER SEQUENCE link_id_seq
    OWNED BY link.id;

