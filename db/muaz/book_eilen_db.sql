PGDMP  '    6        	        }         
   book_eilen    17.5    17.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16388 
   book_eilen    DATABASE     �   CREATE DATABASE book_eilen WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Pakistan.1252';
    DROP DATABASE book_eilen;
                     postgres    false            �            1259    24631    books    TABLE     H  CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(255),
    path character varying(255),
    author character varying(255),
    summary text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    categories text[],
    cover_path character varying(255),
    user_id integer
);
    DROP TABLE public.books;
       public         heap r       postgres    false            �            1259    24630    books_id_seq    SEQUENCE     �   ALTER TABLE public.books ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.books_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    220            �            1259    24583    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    f_name character varying(100) NOT NULL,
    l_name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    verification_token character varying(255)
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    24582    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public               postgres    false    218            �           0    0    user_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;
          public               postgres    false    217            &           2604    24586    users id    DEFAULT     c   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218            �          0    24631    books 
   TABLE DATA           n   COPY public.books (id, title, path, author, summary, created_at, categories, cover_path, user_id) FROM stdin;
    public               postgres    false    220   �       �          0    24583    users 
   TABLE DATA           X   COPY public.users (id, f_name, l_name, email, password, verification_token) FROM stdin;
    public               postgres    false    218   �       �           0    0    books_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.books_id_seq', 1, false);
          public               postgres    false    219            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 3, true);
          public               postgres    false    217            -           2606    24638    books books_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.books DROP CONSTRAINT books_pkey;
       public                 postgres    false    220            )           2606    24593    users user_email_key 
   CONSTRAINT     P   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_email_key UNIQUE (email);
 >   ALTER TABLE ONLY public.users DROP CONSTRAINT user_email_key;
       public                 postgres    false    218            +           2606    24591    users user_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT user_pkey;
       public                 postgres    false    218            .           2606    24639    books fk_user    FK CONSTRAINT     l   ALTER TABLE ONLY public.books
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.users(id);
 7   ALTER TABLE ONLY public.books DROP CONSTRAINT fk_user;
       public               postgres    false    220    4651    218            �      x������ � �      �   �   x��ϻr�@ ��zyj䪖�0fq��B�]� r	��'�Ig�W監 g$3�YA��[j�sR�R�r �TTd�:�v�[�S>\��]��Ԭ��b:�V�J2�'�?�`��.�9���� �����z�vP���)C��V�5Ok���dDJ����I�j�s4�w��A��ɘ�͎������c8��kvdе�a6�@fR��b+k�G}e9��V����E�<\�     