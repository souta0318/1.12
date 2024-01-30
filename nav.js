function loadNavigationBar(relativePath) {
    document.write(`
            <a href="${relativePath}index.html" class="button">ゲーム画面と試合の一連の流れ</a></p>
            <a href="${relativePath}サモナースペル/サモナースペル.html" class="button">サモナースペル説明</a></p>
            <a href="${relativePath}ルーン紹介/ルーンまとめ.html" class="button">ルーンの詳細</a></p>
            <a href="${relativePath}チャンピオンまとめ/LoLチャンピオンまとめ.html" class="button">チャンピオン一覧</a></p>
            <a href="${relativePath}アイテムまとめ/アイテムまとめ.html" class="button">アイテム一覧（v14.1変更中）</a></p>
            <a href="${relativePath}LoL用語解説/LoL用語解説.html" class="button">LoL用語まとめ</a></p>
    `);
}
