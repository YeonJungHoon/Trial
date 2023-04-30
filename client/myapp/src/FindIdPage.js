import styles from './FindIdPage.module.css';

function FindIdPage() {
  return (
    <div className={styles.idfind}>
      <h1>아이디 찾기</h1>
      <form className={styles.idfind_form}>
        <div className={styles.idfind_form_group}>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.idfind_form_group}>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit" className={styles.idfind_btn}>아이디 찾기</button>
      </form>
    </div>
  );
}

export default FindIdPage;
