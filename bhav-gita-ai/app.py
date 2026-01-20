from fastapi import FastAPI
import requests







import os
from dotenv import load_dotenv

load_dotenv()

API_URL = os.getenv("API_URL")








st.set_page_config(page_title="Bhav Gita", page_icon="🕉️", layout="centered")

st.markdown("""
<style>
body {
    background: #f6f2ef;
}
.container {
    max-width: 420px;
    margin: auto;
}
.title {
    font-size: 22px;
    font-weight: 600;
}
.subtitle {
    color: #777;
    margin-bottom: 20px;
}
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
}
.tile {
    border-radius: 22px;
    padding: 26px 10px;
    text-align: center;
    box-shadow: 0 6px 16px rgba(0,0,0,0.08);
    font-weight: 500;
}
.emoji {
    font-size: 48px;
}
.label {
    margin-top: 6px;
    font-size: 16px;
}
.card {
    background: white;
    border-radius: 18px;
    padding: 16px;
    margin-bottom: 14px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.06);
}
.card-title {
    font-size: 13px;
    color: #999;
    margin-bottom: 6px;
}
.shloka {
    font-family: 'Georgia', serif;
    font-size: 17px;
    line-height: 1.6;
    text-align: center;
}
</style>
""", unsafe_allow_html=True)

if "screen" not in st.session_state:
    st.session_state.screen = "home"
if "bhav" not in st.session_state:
    st.session_state.bhav = ""

# ---------- HOME ----------
if st.session_state.screen == "home":
    st.markdown('<div class="container">', unsafe_allow_html=True)
    st.markdown('<div class="title">How are you feeling today?</div>', unsafe_allow_html=True)
    st.markdown('<div class="subtitle">Hi, User!</div>', unsafe_allow_html=True)

    emotions = [
        ("😊", "Happy", "#FFE29A"),
        ("😔", "Sad", "#CDE7FF"),
        ("🧘", "Peace", "#CFF5E7"),
        ("😟", "Worried", "#E5E5E5"),
        ("😰", "Anxiety", "#F6C1E7"),
        ("😠", "Anger", "#FFC1B6"),
    ]

    st.markdown('<div class="grid">', unsafe_allow_html=True)
    for emoji, label, color in emotions:
        if st.button(f"{emoji}\n{label}", use_container_width=True):
            st.session_state.bhav = f"I feel {label.lower()}"
            st.session_state.screen = "detail"
            st.rerun()
    st.markdown('</div></div>', unsafe_allow_html=True)

# ---------- DETAIL ----------
else:
    st.markdown('<div class="container">', unsafe_allow_html=True)
    if st.button("← Back"):
        st.session_state.screen = "home"
        st.rerun()

    with st.spinner("Consulting the Gita..."):
        res = requests.post(API_URL, json={"bhav": st.session_state.bhav})
        data = res.json()

        st.markdown(f"""
        <div class="card shloka">{data['shloka']}</div>
        <div class="card"><div class="card-title">Meaning</div>{data['meaning']}</div>

        """, unsafe_allow_html=True)

    st.markdown('</div>', unsafe_allow_html=True)
