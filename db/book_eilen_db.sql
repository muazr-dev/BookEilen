PGDMP  #                     }         
   book_eilen    17.5    17.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16388 
   book_eilen    DATABASE     �   CREATE DATABASE book_eilen WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Pakistan.1252';
    DROP DATABASE book_eilen;
                     postgres    false            �            1259    24583    user    TABLE     ^  CREATE TABLE public."user" (
    id integer NOT NULL,
    f_name character varying(100) NOT NULL,
    l_name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    verification_token character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public."user";
       public         heap r       postgres    false            �            1259    24582    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public               postgres    false    218            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public               postgres    false    217            !           2604    24586    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            �          0    24583    user 
   TABLE DATA           e   COPY public."user" (id, f_name, l_name, email, password, verification_token, created_at) FROM stdin;
    public               postgres    false    218   �       �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 2, true);
          public               postgres    false    217            $           2606    24593    user user_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_email_key;
       public                 postgres    false    218            &           2606    24591    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public                 postgres    false    218            �   �   x��ͻ��@ �z�+,h�2@�f�� "*�� aUF|���W����;ݡ(8g���l�̓Ǘ>*��kR4Y,�(X^{��ה~a�����-a��f�����aH���$�~کZա�Z���}P}�=�.W.0"[��7w��G�.��G����$E�#�]'�Ui0���HϚN��������.�K%�G�%�? �5IN     