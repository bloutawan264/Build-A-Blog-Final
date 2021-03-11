import React from 'react';

function BTCard() {
  return ( 
 <div>
    <div class="card-title">Butcher twee cronut</div>
              <p class="card-text">Selfies vice chia hammock artisan ethical poutine tbh gentrify tofu.</p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                <div class="btn-block">
                  <button class="btn full">
                    <span role="img" aria-label="Comment">💬</span> 
                    <span class="small">[100]</span>
                  </button>
                </div>
  </div>
  );
}
export default BTCard;